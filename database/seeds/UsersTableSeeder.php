<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create ([
        	'name' => 'gera',
        	'email' => 'gera@gmail.com',
        	'password' => bcrypt('123456')
        ]);

        User::create ([
            'name' => 'juan',
            'email' => 'juan@gmail.com',
            'password' => bcrypt('123456')
        ]);

        User::create ([
            'name' => 'martin',
            'email' => 'martin@gmail.com',
            'password' => bcrypt('123456')
        ]);
    }
}
