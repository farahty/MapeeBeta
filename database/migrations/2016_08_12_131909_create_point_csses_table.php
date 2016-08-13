<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePointCssesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('point_csses', function (Blueprint $table) {
            $table->integer('map_points_id')->unsigned()->index();
            $table->foreign('map_points_id')->references('id')->on('map_points')->onDelete('cascade');
            $table->integer('css_classes_id')->unsigned()->index();
            $table->foreign('css_classes_id')->references('id')->on('css_classes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('point_csses');
    }
}
