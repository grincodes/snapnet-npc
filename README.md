To use passport 
we need to crete differrent strategies that would handle 
creating auth tokens for authenticated users,and also
put user in requests...

implementing passport in nest 
we extend a passport strategy and implement validate method

This also lets us demonstrate another Passport feature: Passport automatically creates a user object, based on the value we return from the validate() method, and assigns it to the Request object as req.user. Later, we'll replace this with code to create and return a JWT instead.


Jwt strategy is the place to perform extra logic on user and 
return more information to the request (user) 


Authorization is used to know the kind of resources a user has access to 
or what a user can do in a system.

Types of Authorization 
RoleBased RBAC - this is based on roles , admin,user,manager
Claim Based - this is based  on permission : read:delete:update 

for claimbased auth there is a library that helps to encapsulate validation
CASL and some others as well

To encapsulate CASL library, let's generate the CaslModule and CaslAbilityFactory now.
$ nest g module casl
$ nest g class casl/casl-ability.factory