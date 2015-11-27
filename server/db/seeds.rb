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
    {name: 'Hello Green', city_id: 1},
    {name: 'Weed Us', city_id: 2},
    {name: 'Social Impact', city_id: 1},
    {name: 'Titanicos', city_id: 3}
             ])
