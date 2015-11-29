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
    {name: 'Hello Green', cities_id: 1},
    {name: 'Weed Us', cities_id: 2},
    {name: 'Social Impact', cities_id: 1},
    {name: 'Titanicos', cities_id: 3}
             ])

Prossumer.create(
  name: 'Master', email: 'teste@amep.pt', password: '123456', phone: '66666' 
  ).update(confirm_hash: nil)

Prossumer.create(
  name: 'Prossumer1', email: 'Prossumer1@amep.pt', password: '123456', phone: '66666' 
  ).update(confirm_hash: nil)

Prossumer.create(
  name: 'Prossumer2', email: 'Prossumer2@amep.pt', password: '123456', phone: '66666' 
  ).update(confirm_hash: nil)

GroupsProssumer.create([
  {group_id: 1, prossumer_id: 1, is_coordinator: true, state: 2},
  {group_id: 1, prossumer_id: 2, is_coordinator: false, state: 2},
  {group_id: 2, prossumer_id: 3, is_coordinator: true, state: 2}
  ])

Product.create([
  {title: 'bananas', description: 'muito boas', unit: 'kg', prossumer_id: 1, ecos: 3, euros: 3},
  {title: 'macas', description: 'muito mas', unit: 'g', prossumer_id: 1, ecos: 20, euros: 50},
  {title: 'bananas da madeira', description: 'muito duras', unit: 'kg', prossumer_id: 2, ecos: 4, euros: 3}
  ])

ProductAuth.create([
  {state: 2,group_id: 1,product_id: 1},
  {state: 1,group_id: 1,product_id: 2},
  {state: 0,group_id: 1,product_id: 3},
  ])

Cycle.create([
  {start: DateTime.new(2015,11,29),end: DateTime.new(2015,12,20),group_id: 1},
  {start: DateTime.new(2015,12,20),end: DateTime.new(2016,1,3),group_id: 1} 
  ])

Week.create([
  {number: 1,cycle_id: 1},
  {number: 2,cycle_id: 1},
  {number: 3,cycle_id: 1},
  {number: 1,cycle_id: 2},
  {number: 2,cycle_id: 2}
  ])

Stock.create([
  {quantity: 5,unit_price_euros: 3,unit_price_ecos: 3, week_id: 1, product_id: 1}
  ])

Order.create([
  {quantity: 2,prossumer_id: 2, stock_id: 1}
  ])





