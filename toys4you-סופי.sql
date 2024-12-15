use master
go
create database toys4you collate hebrew_100_ci_as
go
use toys4you
go

create table categories
(
    categoryId int identity(1,1) not null,
    name varchar(20) not null,
    constraint pk_categories primary key(categoryId)
)
create table products
(
    id int identity(1,1) not null,
    name varchar(20) not null,
    categoryid int not null,
    companyid int not null,
    age int not null,
	description varchar(1000) not null,
    datelastupdate datetime not null,
    picture varchar(50) not null,
    price int not null,
	amount int not null,
    constraint pk_products primary key(id),
    constraint fk_products_categories foreign key(categoryid) references categories(categoryId),
    constraint fk_products_companies foreign key(companyid) references companies(companyId)
)
create table customers
(
    customerId int identity(1,1) not null,
    name varchar(20) not null,
    phone bigint not null,
    email varchar(20) not null,
    dateOfBirth date null,
    constraint pk_customers primary key(customerId)
)
create table purchases
(
    purchaseId int identity(1,1) not null,
    customerId int not null,
    sumToPay int not null,
    comments varchar(20) not null,
    dateOfpurchase date null,
    constraint pk_purchases primary key(purchaseId),
    constraint fk_purchases_customers foreign key(customerid) references customers(customerId)
)
create table purchasedetails
(
    purchaseDetailsId int identity(1,1) not null,
    productId int not null,
    purchaseId int not null,
    amount varchar(20) not null,
    constraint pk_purchasedetails primary key(purchaseDetailsId),
    constraint fk_purchasedetails_products foreign key(productId) references products(id),
    constraint fk_purchasedetails_purchases foreign key(purchaseId) references purchases(purchaseId)
)
create table companies
(
    companyId int identity(1,1) not null,
    name varchar(20) not null,
    constraint pk_companies primary key(companyId)
)
insert into categories (name) 
values 
    ('board game'),
    ('card game'),
    ('family game');
insert into companies (name)
values
    ('hasbro'),
    ('mattel'),
    ('ravensburger'),
    ('asmodee');

insert into products (name, categoryid, companyid, age, datelastupdate, picture, price, description,amount)
values
    ('monopoly', 1, 1, 8, '2024-12-01', 'https://photos.google.com/album/AF1QipOa_iQHMEaQpaheC0Heh3zvC3GACsS4Na8LK5Y/photo/AF1QipPht8wtKg3OjdDarvuc-Y6OQqGbsf1HcLC7YkI', 30, 'classic board game where you buy and sell properties.',1),
    ('rummikub', 1, 2, 8, '2024-12-01', 'rummikub.jpg', 20, 'tile-based game where players try to form sets of numbers.',1),
    ('bingo', 2, 3, 5, '2024-12-01', 'bingo.jpg', 10, 'classic number matching game for families and groups.',1),
    ('sorry!', 2, 4, 6, '2024-12-01', 'sorry.jpg', 15, 'board game where players race to the finish while sending others back to start.',1),
    ('bounce', 3, 1, 3, '2024-12-01', 'bounce.jpg', 25, 'toy with bouncing action that entertains kids for hours.',1),
    ('candyland', 1, 2, 4, '2024-12-01', 'candyland.jpg', 12, 'colorful and fun adventure game for young children.',1),
    ('dixit', 1, 3, 8, '2024-12-01', 'dixit.jpg', 25, 'creative storytelling game where players match illustrations to words.',1),
    ('farm toy', 3, 4, 3, '2024-12-01', 'farmtoy.jpg', 18, 'toy set for imaginative play based on farm life.',1);

insert into customers (name, phone, email, dateofbirth)
values
    ('shmuel choen', 1234567890, 'shmuelc@gmail.com', '1990-05-10'),
    ('sara bar', 9876543210, 'sarabar@gmail.com', '1985-11-22'),
    ('inon chen', 1122334455, 'inonc345@gmail.com', '2000-03-30'),
    ('michael levi', 5566778899, 'michaell@gmail.com', '1995-02-15');

insert into purchases (customerid, sumtopay, comments, dateofpurchase)
values
    (1, 30, 'purchased monopoly', '2024-12-02'),
    (2, 20, 'purchased rummikub', '2024-12-01'),
    (3, 10, 'purchased bingo', '2024-12-03'),
    (4, 15, 'purchased sorry!', '2024-12-01');

insert into purchasedetails (productId, purchaseId, amount)
values
    (1, 2, '30'),
    (2, 2, '20'),
    (3, 3, '10'),
    (4, 5, '15');

select * from categories;
select * from companies;
select * from customers;
select * from products;
select * from purchases;
select * from purchasedetails;

alter table customers
add password varchar(50) null


update customers
set password='kj7895'
where customerId=4


