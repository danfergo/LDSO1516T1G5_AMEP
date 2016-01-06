# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


City.create([
                {name: 'Aveiro'},
                {name: 'Beja'},
                {name: 'Braga'},
                {name: 'Bragança'},
                {name: 'Castelo Branco'},
                {name: 'Coimbra'},
                {name: 'Évora'},
                {name: 'Faro'},
                {name: 'Guarda'},
                {name: 'Leiria'},
                {name: 'Lisboa'},
                {name: 'Portalegre'},
                {name: 'Porto'},
                {name: 'Santarém'},
                {name: 'Setúbal'},
                {name: 'Viana do Castelo'},
                {name: 'Vila Real'},
                {name: 'Viseu'}
            ])

ProductCategory.create([
                           {name: 'Cereais e derivados'}, #1
                           {name: 'Hortícolas'}, #2
                           {name: 'Fruta'}, #3
                           {name: 'Laticínios'}, #4
                           {name: 'Carnes'}, #5
                           {name: 'Pescado'}, #6
                           {name: 'Ovos'}, #7
                           {name: 'Óleos'}, #8
                           {name: 'Doces'}, #9
                           {name: 'Bebidas'}, #10
                           {name: 'Outros'} #11

                       ])

Group.create([
    {name: 'AMEP Porto', city_id: 13}
])

Group.create([
                 {name: 'Bracara Augusta ', city_id: 3}
             ])

Prossumer.create(
             {name: 'Catarina', email: 'catarina@amep.pt', password: '123456', phone: '917364834'}
).update(confirm_hash: nil)#1

Prossumer.create(
    {name: 'Filipa Almeida', email: 'filipalmeida@amep.pt', password: '123456', phone: '936647775'}
).update(confirm_hash: nil)#2

Prossumer.create(
    {name: 'Joana', email: 'joana@amep.pt', password: '123456', phone: '913847761'}
).update(confirm_hash: nil)#3

Prossumer.create(
    {name: 'Nuno Cruz', email: 'nunocruz@amep.pt', password: '123456', phone: '927364509'}
).update(confirm_hash: nil)#4

Prossumer.create(
    {name: 'Portela', email: 'portela@amep.pt', password: '123456', phone: '917830773'}
).update(confirm_hash: nil)#5

Prossumer.create(
    {name: 'Rogério Figueiredo', email: 'rogeriofigueiredo@amep.pt', password: '123456', phone: '960087530'}
).update(confirm_hash: nil)#6

Prossumer.create(
    {name: 'Sara', email: 'sara@amep.pt', password: '123456', phone: '917673987'}
).update(confirm_hash: nil)#7

Prossumer.create(
    {name: 'Vó Guida', email: 'guida@amep.pt', password: '123456', phone: '961097610'}
).update(confirm_hash: nil)#8


GroupsProssumer.create([
                           {group_id: 1, prossumer_id: 1, is_coordinator: false, state: 2},
                           {group_id: 1, prossumer_id: 2, is_coordinator: false, state: 2},
                           {group_id: 1, prossumer_id: 3, is_coordinator: false, state: 2},
                           {group_id: 1, prossumer_id: 4, is_coordinator: false, state: 2},
                           {group_id: 1, prossumer_id: 5, is_coordinator: true, state: 2},
                           {group_id: 1, prossumer_id: 6, is_coordinator: false, state: 2},
                           {group_id: 1, prossumer_id: 7, is_coordinator: true, state: 2},
                           {group_id: 1, prossumer_id: 8, is_coordinator: false, state: 2}
                       ])

GroupsProssumer.create([
                           {group_id: 2, prossumer_id: 5, is_coordinator: true, state: 2},
                           {group_id: 2, prossumer_id: 7, is_coordinator: true, state: 2}
                       ])


Product.create([
                   {title: 'Pão da semana', description:'15 farinhas diferentes, consoante a semana', unit: '500 g', prossumer_id: 1, product_category_id: 1, actived: true}, #1
                   {title: 'Pão de mistura', description:'', unit: '500 g', prossumer_id: 1, product_category_id: 1, actived: true}, #2
                   {title: 'Pão sem gluten', description:'Contém vestígios de gluten', unit: '500 g', prossumer_id: 1, product_category_id: 1, actived: true}, #3
                   {title: 'Mel', unit: 'Kg', description:'', prossumer_id: 2, product_category_id: 9, actived: true}, #4
                   {title: 'Azeitonas', unit: 'Kg', description:'', prossumer_id: 2, product_category_id: 11, actived: true}, #5
                   {title: 'Amendoas', unit: 'Kg', description:'Com casca', prossumer_id: 2, product_category_id: 11, actived: true}, #6
                   {title: 'Amendoas', unit: 'Kg', description:'Sem casca', prossumer_id: 2, product_category_id: 11, actived: true}, #7
                   {title: 'Pão de cereais', unit: '250 g', description:'', prossumer_id: 3, product_category_id: 1, actived: true}, #8
                   {title: 'Pão rústico', unit: '250 g', description:'', prossumer_id: 3, product_category_id: 1, actived: true}, #9
                   {title: 'Pão de beterraba', unit: '250 g', description:'', prossumer_id: 3, product_category_id: 11, actived: true}, #10
                   {title: 'Laranjas', unit: 'kg', description:'', prossumer_id: 4, product_category_id: 3, actived: true}, #11
                   {title: 'Limões', unit: 'kg', description:'', prossumer_id: 4, product_category_id: 3, actived: true}, #12
                   {title: 'Ovos', unit: 'Dúzia', description:'', prossumer_id: 4, product_category_id: 7, actived: true}, #13
                   {title: 'Molho Louro', unit: 'Unidade', description:'', prossumer_id: 5, product_category_id: 11, actived: true}, #14
                   {title: 'Molho Dente de Leão', unit: 'Unidade', description:'', prossumer_id: 5, product_category_id: 11, actived: true}, #15
                   {title: 'Doce de chila', unit: '330 g', description:'', prossumer_id: 6, product_category_id: 11, actived: true}, #16
                   {title: 'Cogumelos conserva', unit: '330 g', description:'', prossumer_id: 6, product_category_id: 11, actived: true}, #17
                   {title: 'Sabonete Glicerina Medicinal', unit: '80 g', description:'', prossumer_id: 6, product_category_id: 11, actived: true}, #18
                   {title: 'Iogurtes', unit: '125 g', description:'', prossumer_id: 7, product_category_id: 4, actived: true}, #19
                   {title: 'Conserva de feijão verde', unit: 'Kg', description:'', prossumer_id: 8, product_category_id: 2, actived: true}, #20
                   {title: 'Ovos', unit: 'Dúzia', description:'', prossumer_id: 8, product_category_id: 7, actived: true}, #21
                   {title: 'Alface', unit: '1 pé', description:'', prossumer_id: 8, product_category_id: 2, actived: true}, #22
                   {title: 'Laranjas', unit: 'kg', description:'', prossumer_id: 8, product_category_id: 3, actived: true} #23

               ])


ProductAuth.create([
                       {state: 2, group_id: 1, product_id: 1, ecos: 0.4, euros: 2.3},
                       {state: 2, group_id: 1, product_id: 2, ecos: 0.4, euros: 1.5},
                       {state: 2, group_id: 1, product_id: 3, ecos: 0.4, euros: 3.2},
                       {state: 2, group_id: 1, product_id: 4, ecos: 0.5, euros: 5.5},
                       {state: 2, group_id: 1, product_id: 5, ecos: 0.5, euros: 3},
                       {state: 2, group_id: 1, product_id: 6, ecos: 0.5, euros: 8},
                       {state: 2, group_id: 1, product_id: 7, ecos: 0.5, euros: 1.5},
                       {state: 2, group_id: 1, product_id: 8, ecos: 1.5, euros: 1.5},
                       {state: 2, group_id: 1, product_id: 9, ecos: 1.5, euros: 1.5},
                       {state: 2, group_id: 1, product_id: 10, ecos: 1.5, euros: 1.5},
                       {state: 2, group_id: 1, product_id: 11, ecos: 0.8, euros: 0},
                       {state: 2, group_id: 1, product_id: 12, ecos: 1, euros: 0},
                       {state: 2, group_id: 1, product_id: 13, ecos: 1.5, euros: 1.5},
                       {state: 2, group_id: 1, product_id: 14, ecos: 0.5, euros: 0},
                       {state: 2, group_id: 1, product_id: 15, ecos: 0.5, euros: 0},
                       {state: 2, group_id: 1, product_id: 16, ecos: 3, euros: 1.5},
                       {state: 2, group_id: 1, product_id: 17, ecos: 1, euros: 2.8},
                       {state: 2, group_id: 1, product_id: 18, ecos: 1, euros: 1.5},
                       {state: 2, group_id: 1, product_id: 19, ecos: 0.5, euros: 0},
                       {state: 2, group_id: 1, product_id: 20, ecos: 1, euros: 2},
                       {state: 2, group_id: 1, product_id: 21, ecos: 1, euros: 2},
                       {state: 2, group_id: 1, product_id: 22, ecos: 0.5, euros: 0.5},
                       {state: 2, group_id: 1, product_id: 23, ecos: 1, euros: 1},
                       {state: 2, group_id: 1, product_id: 24, ecos: 1, euros: 1}
                   ])

Cycle.create([
                 {start_time: (Time.now - 54.day).beginning_of_day(), end_time: (Time.now - 24.day).beginning_of_day(), group_id: 1, title: "Ciclo 1"},
             ])

Cycle.create([
                 {start_time: (Time.now - 23.day).beginning_of_day(), end_time: (Time.now + 4.day).beginning_of_day(), group_id: 1, title: "Ciclo 2"},
             ])

Cycle.create([
                 {start_time: (Time.now + 5.day).beginning_of_day(), end_time: (Time.now + 40.day).beginning_of_day(), group_id: 1, title: "Ciclo 3"},
             ])




Week.create([
                {number: 1, cycle_id: 1, delivery_date: (Time.now - 52.day).change(hour: 18, minute: 30)},#1
                {number: 2, cycle_id: 1, delivery_date: (Time.now - 45.day).change(hour: 17, minute: 00)},#2
                {number: 3, cycle_id: 1, delivery_date: (Time.now - 37.day).change(hour: 15, minute: 30)},#3
                {number: 4, cycle_id: 1, delivery_date: (Time.now - 28.day).change(hour: 18, minute: 15)}#4
            ])



Stock.create([
                 {quantity: 4, unit_price_euros: 2.3, unit_price_ecos: 0.4, week_id: 1, product_id: 1}, #1
                 {quantity: 4, unit_price_euros: 2.3, unit_price_ecos: 0.4, week_id: 2, product_id: 1}, #2
                 {quantity: 4, unit_price_euros: 2.3, unit_price_ecos: 0.4, week_id: 3, product_id: 1}, #3
                 {quantity: 4, unit_price_euros: 2.3, unit_price_ecos: 0.4, week_id: 4, product_id: 1}, #4
                 {quantity: 4, unit_price_euros: 1.5, unit_price_ecos: 0.4, week_id: 1, product_id: 2}, #5
                 {quantity: 5, unit_price_euros: 1.5, unit_price_ecos: 0.4, week_id: 3, product_id: 2}, #6
                 {quantity: 3, unit_price_euros: 1.5, unit_price_ecos: 0.4, week_id: 4, product_id: 2}, #7
                 {quantity: 3, unit_price_euros: 3.2, unit_price_ecos: 0.4, week_id: 1, product_id: 3}, #8
                 {quantity: 3, unit_price_euros: 5.5, unit_price_ecos: 0.5, week_id: 4, product_id: 4}, #9
                 {quantity: 2, unit_price_euros: 3, unit_price_ecos: 0.5, week_id: 4, product_id: 5}, #10
                 {quantity: 2, unit_price_euros: 8, unit_price_ecos: 0.5, week_id: 4, product_id: 6}, #11
                 {quantity: 2, unit_price_euros: 1.5, unit_price_ecos: 0.5, week_id: 4, product_id: 7}, #12
                 {quantity: 5, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 2, product_id: 8}, #13
                 {quantity: 3, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 2, product_id: 9}, #14
                 {quantity: 4, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 2, product_id: 10}, #15
                 {quantity: 8, unit_price_euros: 0, unit_price_ecos: 0.8, week_id: 2, product_id: 11}, #16
                 {quantity: 6, unit_price_euros: 0, unit_price_ecos: 0.8, week_id: 4, product_id: 11}, #17
                 {quantity: 4, unit_price_euros: 0, unit_price_ecos: 1, week_id: 2, product_id: 12}, #18
                 {quantity: 5, unit_price_euros: 0, unit_price_ecos: 1, week_id: 4, product_id: 12}, #19
                 {quantity: 5, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 2, product_id: 13}, #20
                 {quantity: 5, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 4, product_id: 13}, #21
                 {quantity: 10, unit_price_euros: 0, unit_price_ecos: 0.5, week_id: 4, product_id: 14}, #22
                 {quantity: 1, unit_price_euros: 0, unit_price_ecos: 3, week_id: 4, product_id: 15}, #23
                 {quantity: 1, unit_price_euros: 1.5, unit_price_ecos: 3, week_id: 4, product_id: 16}, #24
                 {quantity: 3, unit_price_euros: 2.8, unit_price_ecos: 1, week_id: 2, product_id: 17}, #25
                 {quantity: 2, unit_price_euros: 2.8, unit_price_ecos: 1, week_id: 4, product_id: 17}, #26
                 {quantity: 8, unit_price_euros: 0, unit_price_ecos: 0.5, week_id: 1, product_id: 19}, #27
                 {quantity: 9, unit_price_euros: 0, unit_price_ecos: 0.5, week_id: 3, product_id: 19}, #28
                 {quantity: 9, unit_price_euros: 0, unit_price_ecos: 0.5, week_id: 3, product_id: 19}, #29
                 {quantity: 1, unit_price_euros: 0.5, unit_price_ecos: 0.5, week_id: 1, product_id: 20}, #30
                 {quantity: 1, unit_price_euros: 0.5, unit_price_ecos: 0.5, week_id: 2, product_id: 20}, #31
                 {quantity: 1, unit_price_euros: 0.5, unit_price_ecos: 0.5, week_id: 3, product_id: 20}, #32
                 {quantity: 1, unit_price_euros: 0.5, unit_price_ecos: 0.5, week_id: 4, product_id: 20} #33
             ])


Order.create([
                 {quantity: 1, prossumer_id: 1, stock_id: 13},
                 {quantity: 1, prossumer_id: 1, stock_id: 23},
                 {quantity: 4, prossumer_id: 1, stock_id: 28},
                 {quantity: 1, prossumer_id: 2, stock_id: 7},
                 {quantity: 1, prossumer_id: 3, stock_id: 20},
                 {quantity: 1, prossumer_id: 7, stock_id: 21},
                 {quantity: 1, prossumer_id: 7, stock_id: 23},
                 {quantity: 1, prossumer_id: 7, stock_id: 6},
                 {quantity: 1, prossumer_id: 7, stock_id: 15},
                 {quantity: 1, prossumer_id: 8, stock_id: 9},
                 {quantity: 1, prossumer_id: 8, stock_id: 12},
                 {quantity: 1, prossumer_id: 8, stock_id: 25},
                 {quantity: 1, prossumer_id: 8, stock_id: 13}
             ])

Week.create([
                {number: 1, cycle_id: 2, delivery_date: (Time.now - 20.day).change(hour: 18, minute: 30)},#5
                {number: 2, cycle_id: 2, delivery_date: (Time.now - 10.day).change(hour: 17, minute: 00)},#6
                {number: 3, cycle_id: 2, delivery_date: (Time.now + 0.day).change(hour: 15, minute: 30)},#7
                {number: 4, cycle_id: 2, delivery_date: (Time.now + 3.day).change(hour: 18, minute: 15)}#8
            ])


Stock.create([
                 {quantity: 4, unit_price_euros: 2.3, unit_price_ecos: 0.4, week_id: 5, product_id: 1}, #1
                 {quantity: 4, unit_price_euros: 2.3, unit_price_ecos: 0.4, week_id: 6, product_id: 1}, #2
                 {quantity: 4, unit_price_euros: 2.3, unit_price_ecos: 0.4, week_id: 7, product_id: 1}, #3
                 {quantity: 4, unit_price_euros: 2.3, unit_price_ecos: 0.4, week_id: 8, product_id: 1}, #4
                 {quantity: 4, unit_price_euros: 1.5, unit_price_ecos: 0.4, week_id: 5, product_id: 2}, #5
                 {quantity: 5, unit_price_euros: 1.5, unit_price_ecos: 0.4, week_id: 7, product_id: 2}, #6
                 {quantity: 3, unit_price_euros: 1.5, unit_price_ecos: 0.4, week_id: 8, product_id: 2}, #7
                 {quantity: 3, unit_price_euros: 3.2, unit_price_ecos: 0.4, week_id: 5, product_id: 3}, #8
                 {quantity: 3, unit_price_euros: 5.5, unit_price_ecos: 0.5, week_id: 8, product_id: 4}, #9
                 {quantity: 2, unit_price_euros: 3, unit_price_ecos: 0.5, week_id: 8, product_id: 5}, #10
                 {quantity: 2, unit_price_euros: 8, unit_price_ecos: 0.5, week_id: 8, product_id: 6}, #11
                 {quantity: 2, unit_price_euros: 1.5, unit_price_ecos: 0.5, week_id: 8, product_id: 7}, #12
                 {quantity: 5, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 6, product_id: 8}, #13
                 {quantity: 3, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 6, product_id: 9}, #14
                 {quantity: 4, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 6, product_id: 10}, #15
                 {quantity: 8, unit_price_euros: 0, unit_price_ecos: 0.8, week_id: 6, product_id: 11}, #16
                 {quantity: 6, unit_price_euros: 0, unit_price_ecos: 0.8, week_id: 8, product_id: 11}, #17
                 {quantity: 4, unit_price_euros: 0, unit_price_ecos: 1, week_id: 6, product_id: 12}, #18
                 {quantity: 5, unit_price_euros: 0, unit_price_ecos: 1, week_id: 8, product_id: 12}, #19
                 {quantity: 5, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 6, product_id: 13}, #20
                 {quantity: 5, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 8, product_id: 13}, #21
                 {quantity: 10, unit_price_euros: 0, unit_price_ecos: 0.5, week_id: 8, product_id: 14}, #22
                 {quantity: 1, unit_price_euros: 0, unit_price_ecos: 3, week_id: 8, product_id: 15}, #23
                 {quantity: 1, unit_price_euros: 1.5, unit_price_ecos: 3, week_id: 8, product_id: 16}, #24
                 {quantity: 3, unit_price_euros: 2.8, unit_price_ecos: 1, week_id: 6, product_id: 17}, #25
                 {quantity: 2, unit_price_euros: 2.8, unit_price_ecos: 1, week_id: 8, product_id: 17}, #26
                 {quantity: 8, unit_price_euros: 0, unit_price_ecos: 0.5, week_id: 5, product_id: 19}, #27
                 {quantity: 9, unit_price_euros: 0, unit_price_ecos: 0.5, week_id: 7, product_id: 19}, #28
                 {quantity: 9, unit_price_euros: 0, unit_price_ecos: 0.5, week_id: 7, product_id: 19}, #29
                 {quantity: 1, unit_price_euros: 0.5, unit_price_ecos: 0.5, week_id: 5, product_id: 20}, #30
                 {quantity: 1, unit_price_euros: 0.5, unit_price_ecos: 0.5, week_id: 6, product_id: 20}, #31
                 {quantity: 1, unit_price_euros: 0.5, unit_price_ecos: 0.5, week_id: 7, product_id: 20}, #32
                 {quantity: 1, unit_price_euros: 0.5, unit_price_ecos: 0.5, week_id: 8, product_id: 20} #33
             ])

Order.create([
                 {quantity: 2, prossumer_id: 1, stock_id: 46},
                 {quantity: 1, prossumer_id: 1, stock_id: 56},
                 {quantity: 1, prossumer_id: 1, stock_id: 61},
                 {quantity: 2, prossumer_id: 2, stock_id: 40},
                 {quantity: 1, prossumer_id: 3, stock_id: 53},
                 {quantity: 1, prossumer_id: 7, stock_id: 54},
                 {quantity: 1, prossumer_id: 7, stock_id: 56},
                 {quantity: 2, prossumer_id: 7, stock_id: 39},
                 {quantity: 1, prossumer_id: 7, stock_id: 48},
                 {quantity: 1, prossumer_id: 8, stock_id: 42},
                 {quantity: 2, prossumer_id: 8, stock_id: 45},
                 {quantity: 1, prossumer_id: 8, stock_id: 58},
                 {quantity: 1, prossumer_id: 8, stock_id: 46}
             ])


Week.create([
                {number: 1, cycle_id: 3, delivery_date: (Time.now + 11.day).change(hour: 18, minute: 30)},#9
                {number: 2, cycle_id: 3, delivery_date: (Time.now + 20.day).change(hour: 17, minute: 00)},#10
                {number: 3, cycle_id: 3, delivery_date: (Time.now + 25.day).change(hour: 15, minute: 30)},#11
                {number: 4, cycle_id: 3, delivery_date: (Time.now + 38.day).change(hour: 18, minute: 15)}#12
            ])





Stock.create([
                 {quantity: 4, unit_price_euros: 2.3, unit_price_ecos: 0.4, week_id: 9, product_id: 1}, #1
                 {quantity: 4, unit_price_euros: 2.3, unit_price_ecos: 0.4, week_id: 10, product_id: 1}, #2
                 {quantity: 4, unit_price_euros: 2.3, unit_price_ecos: 0.4, week_id: 11, product_id: 1}, #3
                 {quantity: 4, unit_price_euros: 2.3, unit_price_ecos: 0.4, week_id: 12, product_id: 1}, #4
                 {quantity: 4, unit_price_euros: 1.5, unit_price_ecos: 0.4, week_id: 9, product_id: 2}, #5
                 {quantity: 5, unit_price_euros: 1.5, unit_price_ecos: 0.4, week_id: 11, product_id: 2}, #6
                 {quantity: 3, unit_price_euros: 1.5, unit_price_ecos: 0.4, week_id: 12, product_id: 2}, #7
                 {quantity: 3, unit_price_euros: 3.2, unit_price_ecos: 0.4, week_id: 9, product_id: 3}, #8
                 {quantity: 3, unit_price_euros: 5.5, unit_price_ecos: 0.5, week_id: 12, product_id: 4}, #9
                 {quantity: 2, unit_price_euros: 3, unit_price_ecos: 0.5, week_id: 12, product_id: 5}, #10
                 {quantity: 2, unit_price_euros: 8, unit_price_ecos: 0.5, week_id: 12, product_id: 6}, #11
                 {quantity: 2, unit_price_euros: 1.5, unit_price_ecos: 0.5, week_id: 12, product_id: 7}, #12
                 {quantity: 5, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 10, product_id: 8}, #13
                 {quantity: 3, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 12, product_id: 9}, #14
                 {quantity: 4, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 10, product_id: 10}, #15
                 {quantity: 8, unit_price_euros: 0, unit_price_ecos: 0.8, week_id: 10, product_id: 11}, #16
                 {quantity: 6, unit_price_euros: 0, unit_price_ecos: 0.8, week_id: 12, product_id: 11}, #17
                 {quantity: 4, unit_price_euros: 0, unit_price_ecos: 1, week_id: 10, product_id: 12}, #18
                 {quantity: 5, unit_price_euros: 0, unit_price_ecos: 1, week_id: 12, product_id: 12}, #19
                 {quantity: 5, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 10, product_id: 13}, #20
                 {quantity: 5, unit_price_euros: 1.5, unit_price_ecos: 1.5, week_id: 12, product_id: 13}, #21
                 {quantity: 10, unit_price_euros: 0, unit_price_ecos: 0.5, week_id: 12, product_id: 14}, #22
                 {quantity: 1, unit_price_euros: 0, unit_price_ecos: 3, week_id: 12, product_id: 15}, #23
                 {quantity: 1, unit_price_euros: 1.5, unit_price_ecos: 3, week_id: 12, product_id: 16}, #24
                 {quantity: 3, unit_price_euros: 2.8, unit_price_ecos: 1, week_id: 10, product_id: 17}, #25
                 {quantity: 2, unit_price_euros: 2.8, unit_price_ecos: 1, week_id: 10, product_id: 17}, #26
                 {quantity: 8, unit_price_euros: 0, unit_price_ecos: 0.5, week_id: 9, product_id: 19}, #27
                 {quantity: 9, unit_price_euros: 0, unit_price_ecos: 0.5, week_id: 11, product_id: 19}, #28
                 {quantity: 9, unit_price_euros: 0, unit_price_ecos: 0.5, week_id: 11, product_id: 19}, #29
                 {quantity: 1, unit_price_euros: 0.5, unit_price_ecos: 0.5, week_id: 9, product_id: 20}, #30
                 {quantity: 1, unit_price_euros: 0.5, unit_price_ecos: 0.5, week_id: 10, product_id: 20}, #31
                 {quantity: 1, unit_price_euros: 0.5, unit_price_ecos: 0.5, week_id: 11, product_id: 20}, #32
                 {quantity: 1, unit_price_euros: 0.5, unit_price_ecos: 0.5, week_id: 12, product_id: 20} #33
             ])

ProductAuth.create([
                       {state: 2, group_id: 2, product_id: 14, ecos: 0.5, euros: 0},
                       {state: 2, group_id: 2, product_id: 15, ecos: 0.5, euros: 0},
                       {state: 2, group_id: 2, product_id: 19, ecos: 0.5, euros: 0}
                   ])

Cycle.create([
                 {start_time: (Time.now + 10.day).beginning_of_day(), end_time: (Time.now + 40.day).beginning_of_day(), group_id: 2, title: "Ciclo 1"},
             ])

Week.create([
                {number: 1, cycle_id: 4, delivery_date: (Time.now + 16.day).change(hour: 18, minute: 30)},#9
                {number: 2, cycle_id: 4, delivery_date: (Time.now + 25.day).change(hour: 17, minute: 00)},#10
                {number: 3, cycle_id: 4, delivery_date: (Time.now + 30.day).change(hour: 15, minute: 30)},#11
                {number: 4, cycle_id: 4, delivery_date: (Time.now + 35.day).change(hour: 18, minute: 15)}#12
            ])


=begin

City.create([
                {name: 'Porto'},
                {name: 'Lisboa'},
                {name: 'Viana do Castelo'}
            ])

ProductCategory.create([
                           {name: 'Laticinios'},
                           {name: 'Fruta'},
                           {name: 'Vegetais'},
                           {name: 'Outros'}
                       ])


Group.create([
                 {name: 'Hello Green', city_id: 1},
                 {name: 'Weed Us', city_id: 2},
                 {name: 'Social Impact', city_id: 1},
                 {name: 'Titanicos', city_id: 3}
             ])

Prossumer.create(
    name: 'Prossumer1', email: 'prossumer2@amep.pt', password: '123456', phone: '66666'
).update(confirm_hash: nil

Prossumer.create(
    name: 'Prossumer2', email: 'prossumer2@amep.pt', password: '123456', phone: '66666'
).update(confirm_hash: nil)

Prossumer.create(
    name: 'Prossumer3', email: 'prossumer3@amep.pt', password: '123456', phone: '66666'
).update(confirm_hash: nil)


GroupsProssumer.create([
                           {group_id: 1, prossumer_id: 1, is_coordinator: true, state: 2},
                           {group_id: 1, prossumer_id: 2, is_coordinator: false, state: 2},
                           {group_id: 1, prossumer_id: 3, is_coordinator: false, state: 2},
                           {group_id: 2, prossumer_id: 1, is_coordinator: true, state: 2},
                           {group_id: 3, prossumer_id: 1, is_coordinator: true, state: 2}
                       ])

Product.create([
                   {title: 'Bananas', description: '', unit: 'kg', prossumer_id: 1, product_category_id: 2},
                   {title: 'Maças', description: 'Biológicas', unit: 'g', prossumer_id: 1, product_category_id: 2},
                   {title: 'Cenouras', description: '', unit: 'kg', prossumer_id: 2, product_category_id: 3},
                   {title: 'Batatas', description: '', unit: 'kg', prossumer_id: 2, product_category_id: 3},
                   {title: 'Iogurte', description: 'Doce', unit: 'g', prossumer_id: 3, product_category_id: 1}
               ])

ProductAuth.create([
                       {state: 2, group_id: 1, product_id: 1, ecos: 3, euros: 3},
                       {state: 2, group_id: 1, product_id: 2, ecos: 2, euros: 0.5},
                       {state: 2, group_id: 1, product_id: 3, ecos: 4, euros: 3},
                       {state: 2, group_id: 1, product_id: 4, ecos: 6, euros: 3},
                       {state: 2, group_id: 1, product_id: 1, ecos: 6, euros: 3},
                       {state: 2, group_id: 1, product_id: 2, ecos: 6, euros: 3}
                   ])

Cycle.create([
                 {start_time: DateTime.new(2016, 01, 06), end_time: DateTime.new(2016, 02, 13), group_id: 1},
                 {start_time: DateTime.new(2015, 12, 8), end_time: DateTime.new(2015, 12, 29), group_id: 2},
                 {start_time: DateTime.new(2015, 12, 8), end_time: DateTime.new(2015, 12, 29), group_id: 3},
                 {start_time: DateTime.new(2015, 11, 14), end_time: DateTime.new(2015, 12, 13), group_id: 1},
                 {start_time: DateTime.new(2015, 12, 20), end_time: DateTime.new(2015, 12, 27), group_id: 1},
                 {start_time: DateTime.new(2015, 12, 29), end_time: DateTime.new(2016, 1, 10), group_id: 2}
             ])

Week.create([
                {number: 1, cycle_id: 1, delivery_date: DateTime.new(2015, 12, 11, 18, 30)},
                {number: 2, cycle_id: 1, delivery_date: DateTime.new(2015, 12, 15, 17, 00)},
                {number: 3, cycle_id: 1, delivery_date: DateTime.new(2015, 12, 22, 15, 30)},
                {number: 4, cycle_id: 1, delivery_date: DateTime.new(2015, 12, 29, 18, 15)},
                {number: 1, cycle_id: 4, delivery_date: DateTime.new(2015, 11, 20, 18, 30)},
                {number: 2, cycle_id: 4, delivery_date: DateTime.new(2015, 11, 28, 17, 00)},
                {number: 3, cycle_id: 4, delivery_date: DateTime.new(2015, 12, 5, 17, 00)},
                {number: 4, cycle_id: 4, delivery_date: DateTime.new(2015, 12, 10, 17, 00)},
                {number: 1, cycle_id: 2, delivery_date: DateTime.new(2016, 1, 5, 18, 30)},
                {number: 2, cycle_id: 2, delivery_date: DateTime.new(2016, 1, 9, 17, 15)},
                {number: 3, cycle_id: 2, delivery_date: DateTime.new(2015, 12, 22, 15, 30)},
                {number: 4, cycle_id: 2, delivery_date: DateTime.new(2015, 12, 29, 18, 15)},
                {number: 1, cycle_id: 3, delivery_date: DateTime.new(2015, 12, 11, 17, 15)},
                {number: 2, cycle_id: 3, delivery_date: DateTime.new(2015, 12, 15, 18, 30)},
                {number: 3, cycle_id: 3, delivery_date: DateTime.new(2015, 12, 22, 15, 30)},
                {number: 4, cycle_id: 3, delivery_date: DateTime.new(2015, 12, 29, 18, 15)},
                {number: 1, cycle_id: 5, delivery_date: DateTime.new(2015, 12, 22, 18, 15)},
                {number: 1, cycle_id: 6, delivery_date: DateTime.new(2016, 1, 2, 18, 15)}
            ])

Stock.create([
                {quantity: 10, unit_price_euros: 2, unit_price_ecos: 9, week_id: 5, product_id: 1},
                {quantity: 10, unit_price_euros: 3, unit_price_ecos: 3, week_id: 1, product_id: 1},
                {quantity: 8, unit_price_euros: 3, unit_price_ecos: 3, week_id: 1, product_id: 3},
                {quantity: 3, unit_price_euros: 1, unit_price_ecos: 1, week_id: 1, product_id: 4},
                {quantity: 10, unit_price_euros: 3, unit_price_ecos: 3, week_id: 1, product_id: 1},
                {quantity: 8, unit_price_euros: 2, unit_price_ecos: 3, week_id: 17, product_id: 3},
                {quantity: 8, unit_price_euros: 2, unit_price_ecos: 3, week_id: 17, product_id: 2},
                {quantity: 8, unit_price_euros: 2, unit_price_ecos: 3, week_id: 11, product_id: 1},
                {quantity: 8, unit_price_euros: 2, unit_price_ecos: 3, week_id: 11, product_id: 3}

             ])

Order.create([
                 {quantity: 3, prossumer_id: 2, stock_id: 1},
                 {quantity: 5, prossumer_id: 1, stock_id: 1},
                 {quantity: 3, prossumer_id: 2, stock_id: 1},
                 {quantity: 5, prossumer_id: 1, stock_id: 1},
                 {quantity: 2, prossumer_id: 1, stock_id: 3},
                 {quantity: 2, prossumer_id: 2, stock_id: 8},
                 {quantity: 5, prossumer_id: 1, stock_id: 9},
                 {quantity: 3, prossumer_id: 3, stock_id: 9}
             ])
=end
