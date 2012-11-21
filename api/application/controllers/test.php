<?php

// Connecting, selecting database
$dbconn = pg_connect("host=michaelsucci.com dbname=hungry user=postgres password=thuglife")
    or die('Could not connect: ' . pg_last_error());

$core 	= 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=toronto+food&sensor=true&key=AIzaSyAbtVzSztmDvWW-qElfX2Ka40Tl3fQbjZU';
$url 	= $core;

while (true)
{
	$googleApiReq 		= $url;
	$data 				= json_decode(file_get_contents($googleApiReq));
	$npt 				= isset($data->next_page_token) ? $data->next_page_token : null;

	foreach ($data->results as $result)
	{
		$values = array("'" . pg_escape_string($result->name) . "'", 
						"'" . $result->rating . "'", 
						"'" . $result->reference . "'", 
						"'" . pg_escape_string($result->formatted_address) . "'",
						"'(" . $result->geometry->location->lng . ', ' . $result->geometry->location->lat . ")'",
						'ST_GeomFromText(\'POINT(' . $result->geometry->location->lng . ' ' . $result->geometry->location->lat . ')\', 4326)',
						'st_geogfromtext(\'SRID=4326;POINT(' . $result->geometry->location->lng . ' ' . $result->geometry->location->lat . ')\')',
					);

		$sql = 'INSERT INTO locations (name, rating, reference, address, point, the_geom, the_geog) VALUES ( ' . implode(',', $values) . ')';
		echo $sql . ';<br/>';
		$result = @pg_query($dbconn, $sql);
	}

	if (!$npt)
	{
		break;
	}
	else
	{
		$url = $core . '&pagetoken=' . $npt;
	}
}

// Closing connection
pg_close($dbconn);


$sql = "SELECT * FROM locations WHERE ST_DWithin(the_geog, 'SRID=4326;POINT(-79.4136029 43.6612063)', 1000);"