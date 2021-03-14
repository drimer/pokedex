Setup
=====

To run the api
--------------
1. Install Pyhon and a venv
2. cd api
3. pip install -r requirements.txt
4. python webapp/manage.py runserver


To run the frontend
-------------------
1. Install npm
2. cd ui
3. npm install
4. npm start

It should be available on http://localhost:3000 or the next port
available from 3000 upwards.


To run unit tests
-----------------
1. cd api && python manage.py test
2. cd ui && npm test


Some personal notes
-------------------
1. I've supplied a pre-populated DB with some pokemons. The admin screen
is accessible on http://localhost:8000/admin and the credentials are
   

    username: admin
    password: admin


2. Test coverage needs to improve a lot. I've added some very basic tests
to show that the way I've approached writing this POC allows for having
independent components that are easily unit-testable.
   
3. Error handling is virtually non-existent in my code. And I started
approaching the issue of showing something like a spinner while async
operations are done (notice there's isLoading and isSynced in the Redux
state), but I'm leaving that open due to time constraints.
   
3. My IDE has failed to help me with auto-formatting. Something I've done
with it has screwed that up, so probably some indentation is a bit off,
and I've probably missed unused imports and things like that.

3. The design of the DB is the most basic one I could come up with in the
time slot. For example:
   - Evolutions is a very interesting thing to model in the DB. Some pokemon
     can evolve into different pokemon. Not only that, but evolution
     conditions can be complex in some cases. If we wanted to offer a
     nice-looking way for users to see straight away how pokemon evolve,
     there are a lot of different scenarios. Eg.
     - Tyrogue evolves into Hitmontop, Hitmonchan or Hitmonlee depending
     on specific stats.
     - Some pokemon, like Kadabra, Excavalier or Machoke, evolve upon
     trading.
     - Some other pokemon need to be holding a specific item, evolve at
     a specific time of day, etc.
       
4. A pokedex usually shows which TMs pokemon can learn, and those differ
between game versions. TMs from 1st generation (Blue/Red/Yellow) aren't
the same as TRs in Sword/Shield.
