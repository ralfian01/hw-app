<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Create package category table
        Schema::create('package__category', function (Blueprint $table) {
            $table->integer('ppc_id')->autoIncrement();
            $table->string('ppc_code', 100)->nullable(false);
            $table->string('ppc_name', 100)->nullable(false);
            $table->string('ppc_description', 250)->nullable();

            $table->dateTime('ppc_createdAt')->useCurrent();
            $table->dateTime('ppc_updatedAt')->useCurrentOnUpdate()->nullable()->default(null);
        });

        // Create package session table
        Schema::create('package__session', function (Blueprint $table) {
            $table->integer('pps_id')->autoIncrement();
            $table->integer('ppc_id')->nullable(false);
            $table->foreign('ppc_id')->references('ppc_id')->on('package__category')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->string('pps_code', 100)->nullable(false);
            $table->string('pps_name', 100)->nullable(false);
            $table->string('pps_description', 250)->nullable();

            $table->dateTime('pps_createdAt')->useCurrent();
            $table->dateTime('pps_updatedAt')->useCurrentOnUpdate()->nullable()->default(null);
        });

        // Create package session table
        Schema::create('package__level', function (Blueprint $table) {
            $table->integer('ppl_id')->autoIncrement();
            $table->integer('pps_id')->nullable(false);
            $table->foreign('pps_id')->references('pps_id')->on('package__session')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->string('ppl_code', 100)->nullable(false);
            $table->string('ppl_name', 100)->nullable(false);
            $table->string('ppl_description', 250)->nullable();
            $table->string('ppl_photoPath', 250)->nullable();
            $table->integer('ppl_price');

            $table->dateTime('ppl_createdAt')->useCurrent();
            $table->dateTime('ppl_updatedAt')->useCurrentOnUpdate()->nullable()->default(null);
        });

        // Create package service to client table
        Schema::create('package__service_client', function (Blueprint $table) {
            $table->integer('ppsc_id')->autoIncrement();
            $table->integer('ppl_id')->nullable(false);
            $table->foreign('ppl_id')->references('ppl_id')->on('package__level')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->string('ppsc_title', 100)->nullable(false);
            $table->string('ppsc_description', 250)->nullable();
            $table->string('ppsc_additionalInfo', 250)->nullable();
            $table->json('ppsc_workCategory')->nullable(true);

            $table->dateTime('ppsc_createdAt')->useCurrent();
            $table->dateTime('ppsc_updatedAt')->useCurrentOnUpdate()->nullable()->default(null);
        });

        // Create package given to client table
        Schema::create('package__given_client', function (Blueprint $table) {
            $table->integer('ppgc_id')->autoIncrement();
            $table->integer('ppl_id')->nullable(false);
            $table->foreign('ppl_id')->references('ppl_id')->on('package__level')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->string('ppgc_title', 100)->nullable(false);
            $table->string('ppgc_description', 250)->nullable();
            $table->string('ppgc_additionalInfo', 250)->nullable();
            $table->json('ppgc_workCategory')->nullable(true);

            $table->dateTime('ppgc_createdAt')->useCurrent();
            $table->dateTime('ppgc_updatedAt')->useCurrentOnUpdate()->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('package__category');
        Schema::dropIfExists('package__session');
        Schema::dropIfExists('package__level');
        Schema::dropIfExists('package__service_client');
        Schema::dropIfExists('package__given_client');
    }
};
