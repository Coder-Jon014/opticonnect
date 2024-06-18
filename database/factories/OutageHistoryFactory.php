<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Outage_History>
 */
class OutageHistoryFactory extends Factory
{
    protected $model = OutageHistory::class;

    public function definition()
    {
        // Define a random start date from April 1, 2024
        $startDate = $this->faker->dateTimeBetween('2024-06-15', 'now');

        // Define a random end date between the start date and now
        $endDate = $this->faker->dateTimeBetween($startDate, 'now');

        return [
            'olt_id' => \App\Models\OLT::inRandomOrder()->first()->id,
            'team_id' => \App\Models\Team::inRandomOrder()->first()->id,
            'start_time' => $startDate,
            'end_time' => $endDate,
            'duration' => $endDate->getTimestamp() - $startDate->getTimestamp(), // Duration in seconds
            'resolution_details' => $this->faker->sentence,
        ];
    }
}
