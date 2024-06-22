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
        // Create profile table
        Schema::create('profile', function (Blueprint $table) {
            $table->integer('ppr_id')->autoIncrement();
            $table->integer('pa_id')->nullable(false);
            $table->foreign('pa_id')->references('pa_id')->on('account')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->string('ppr_name', 100);
            $table->string('ppr_phoneNumber', 25);

            $table->dateTime('ppr_createdAt')->useCurrent();
            $table->dateTime('ppr_updatedAt')->useCurrentOnUpdate()->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_profile');
    }
};
