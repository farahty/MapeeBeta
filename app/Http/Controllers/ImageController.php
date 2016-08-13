<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Models\Image;
use Auth;


class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $images = Image::with('author')->get();
        return response()->success(compact('images'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request,Image::rules());
        $obj = new Image();
        $obj->title = $request->title;
        $obj->description = $request->description;
        $obj->path = $request->path;
        $obj->user_id = Auth::user()->id;
        $obj->save();
        return response()->success(compact('obj'));

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
        Image::destroy($id);

        return response()->success('success');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function upload(Request $request){
        if ($request->file('file')->isValid()) {
            $destinationPath = 'img/uploads';
            $extension = $request->file('file')->getClientOriginalExtension();
            $fileName = rand(11111,99999).'.'.$extension;
            $request->file('file')->move($destinationPath, $fileName);
            $img_src = "/".$destinationPath."/".$fileName;
            return response()->success(compact('img_src'));
        }
        return response()->error('file note valid');
    }
}
