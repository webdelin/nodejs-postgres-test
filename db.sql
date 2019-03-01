BEGIN;

-- CREATE TABLE "users" ----------------------------------------
CREATE TABLE "public"."users" ( 
	"id" Integer DEFAULT nextval('users_id_seq'::regclass) NOT NULL,
	"name" Character( 255 ) NOT NULL,
	"phone" Character( 255 ) NOT NULL,
	"email" Character( 255 ) NOT NULL,
	"active" Boolean NOT NULL,
	CONSTRAINT "unique_users_id" UNIQUE( "id" ) );
 ;
-- -------------------------------------------------------------

COMMIT;
