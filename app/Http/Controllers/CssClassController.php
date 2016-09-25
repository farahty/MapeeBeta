<?php

namespace App\Http\Controllers;

use App\Models\CssClass;
use Illuminate\Http\Request;
use App\Http\Requests;
use Auth;

class CssClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $css = CssClass::with('author')->get();
        return response()->success(compact('css'));
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
        $this->validate($request,CssClass::rules());
        $obj = new CssClass();
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
        $css = CssClass::with('author')->find($id);
        return response()->success($css);
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
        $css = CssClass::find($id);
        $this->validate($request,CssClass::rules());
        $css->title = $request->title;
        $css->description = $request->description;
        $css->user_id = $request->id;
        $css->save();
        return response()->success($css);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        CssClass::destroy($id);

        return response()->success('success');
    }
}
