<?php

namespace App\Http\Controllers;

use App\Models\IconCategory;
use Illuminate\Http\Request;
use Auth;
use App\Http\Requests;

class IconCatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = IconCategory::with('author')->get();

        return response()->success(compact('category'));
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
        $this->validate($request,IconCategory::rules());
        $obj = new IconCategory();
        $obj->title = $request->title;
        $obj->description = $request->description;
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
        $obj = IconCategory::with('author')->find($id);
        $obj->audit = $this->logs($obj->logs);
        unset($obj->logs);
        return response()->success($obj);
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
        $obj = IconCategory::find($id);
        $this->validate($request,IconCategory::rules());
        $obj->title = $request->title;
        $obj->description = $request->description;
        $obj->user_id = $request->user_id;
        $obj->save();
        $obj = IconCategory::with('author')->find($id);
        $obj->audit = $this->logs($obj->logs);
        unset($obj->logs);
        return response()->success($obj);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        IconCategory::destroy($id);
        return response()->success('success');
    }
}
