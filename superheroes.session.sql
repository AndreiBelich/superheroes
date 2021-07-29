INSERT INTO heroes
VALUES(1,'batman', 'Bruce Wayne', 'heroes never die', 'i am batman', 1, 1, '2021-07-07', '2021-07-07');

DELETE FROM heroes;
DELETE FROM abilities;
DELETE FROM heroes_to_abilities;

DROP TABLE "hero_images" CASCADE;
DROP TABLE "heroes" CASCADE;
DROP TABLE "abilities" CASCADE;
DROP TABLE "heroes_to_abilities" CASCADE;