<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require(APPPATH . 'libraries/REST_Controller.php');  

class Deals extends REST_Controller
{
    public function index_get()
    {
    	
    	$this->response('derp', 201);
    }

    public function index_post()
    {
        // Create a new book
    }
}