# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

City.create([
    {name: 'Porto'},
    {name: 'Lisboa'},
    {name: 'Viana do Castelo'}
            ])

Group.create([
    {name: 'Hello Green', cities_id: 0},
    {name: 'Weed Us', cities_id: 1},
    {name: 'Social Impact', cities_id: 0},
    {name: 'Titanicos', cities_id: 2}
             ])
