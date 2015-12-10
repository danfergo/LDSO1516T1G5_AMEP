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
ProductCategory.create([
                           {name: 'Laticinios'},
                           {name: 'Fruta'},
                           {name: 'Vegetais'}
                       ])


Group.create([
                 {name: 'Hello Green', city_id: 1},
                 {name: 'Weed Us', city_id: 2},
                 {name: 'Social Impact', city_id: 1},
                 {name: 'Titanicos', city_id: 3}
             ])

Prossumer.create(
    name: 'Prossumer1', email: 'master@amep.pt', password: '123456', phone: '66666'
).update(confirm_hash: nil)

Prossumer.create(
    name: 'Prossumer2', email: 'prossumer2@amep.pt', password: '123456', phone: '66666'
).update(confirm_hash: nil)

Prossumer.create(
    name: 'Prossumer3', email: 'prossumer3@amep.pt', password: '123456', phone: '66666'
).update(confirm_hash: nil)


GroupsProssumer.create([
                           {group_id: 1, prossumer_id: 1, is_coordinator: true, state: 2},
                           {group_id: 1, prossumer_id: 2, is_coordinator: false, state: 2},
                           {group_id: 1, prossumer_id: 3, is_coordinator: false, state: 2}
                       ])

Product.create([
                   {title: 'Bananas', description: '', unit: 'kg', prossumer_id: 1},
                   {title: 'Maças', description: 'Biológicas', unit: 'g', prossumer_id: 1},
                   {title: 'Cenouras', description: '', unit: 'kg', prossumer_id: 2},
                   {title: 'Batatas', description: '', unit: 'kg', prossumer_id: 2},
                   {title: 'Iogurte', description: 'Doce', unit: 'g', prossumer_id: 3}
               ])

ProductAuth.create([
                       {state: 2, group_id: 1, product_id: 1, ecos: 3, euros: 3},
                       {state: 2, group_id: 1, product_id: 2, ecos: 2, euros: 0.5},
                       {state: 2, group_id: 1, product_id: 3, ecos: 4, euros: 3},
                       {state: 2, group_id: 1, product_id: 4, ecos: 6, euros: 3}
                   ])

Cycle.create([
                 {start_time: DateTime.new(2015, 12, 8), end_time: DateTime.new(2015, 12, 29), group_id: 1}
             ])

Week.create([
                {number: 1, cycle_id: 1, delivery_date: DateTime.new(2015, 12, 11, 8)},
                {number: 2, cycle_id: 1, delivery_date: DateTime.new(2015, 12, 15)},
                {number: 3, cycle_id: 1, delivery_date: DateTime.new(2015, 12, 22)},
                {number: 4, cycle_id: 1, delivery_date: DateTime.new(2015, 12, 29)}
            ])

Stock.create([
                 {quantity: 10, unit_price_euros: 3, unit_price_ecos: 3, week_id: 1, product_id: 1},
                 {quantity: 8, unit_price_euros: 3, unit_price_ecos: 3, week_id: 1, product_id: 3},
                 {quantity: 3, unit_price_euros: 1, unit_price_ecos: 1, week_id: 1, product_id: 4},

             ])

Order.create([
                 {quantity: 3, prossumer_id: 2, stock_id: 1},
                 {quantity: 5, prossumer_id: 1, stock_id: 2},
                 {quantity: 2, prossumer_id: 1, stock_id: 3}
             ])
