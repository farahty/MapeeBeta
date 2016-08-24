<?php

namespace App\Http\Controllers;

use App\Models\MapPoint;
use Illuminate\Http\Request;
use Auth;
use App\Http\Requests;

class MapPointController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $points = MapPoint::all();
        return response()->success(compact('points'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,MapPoint::rules());
        $point = new MapPoint();
        $point->title = $request->title;
        $point->description = $request->description;
        $point->lat = $request->lat;
        $point->long = $request->long;
        $point->icon_id = $request->icon_id;
        $point->cat_id = $request->cat_id;
        $point->title_level_id = $request->title_level_id;
        $point->icon_level_id = $request->icon_level_id;
        $point->user_id = Auth::user()->id;
        $point->save();
        return response()->success(compact('point'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        MapPoint::destroy($id);

        return response()->success('success');
    }
}
