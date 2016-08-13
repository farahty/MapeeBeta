<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMapPointsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('map_points', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('description');
            $table->string('lat');
            $table->string('long');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('icon_id')->unsigned();
            $table->foreign('icon_id')->references('id')->on('map_icons');
            $table->integer('cat_id')->unsigned();
            $table->foreign('cat_id')->references('id')->on('icon_categories');
            $table->integer('title_level_id')->unsigned();
            $table->foreign('title_level_id')->references('id')->on('levels');
            $table->integer('icon_level_id')->unsigned();
            $table->foreign('icon_level_id')->references('id')->on('levels');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('map_points');
    }
}
