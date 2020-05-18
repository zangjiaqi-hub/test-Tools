HEADER_PATH = /usr/include/
VPATH = ./include
redisHi : redisHi.o hiRedisOption.o
	g++ -o redisHi redisHi.o hiRedisOption.o -lpthread -lhiredis -lconfig++ -lmysqlclient -llogpro
hiRedisOption.o : hiRedisOption.hpp
	g++ -g -c ./src/hiRedisOption.cpp -o hiRedisOption.o
redisHi.o : redisHi.hpp hiRedisOption.hpp
	g++ -g -c ./src/redisHi.cpp -o redisHi.o -lpthread -lhiredis -lconfig++ -lmysqlclient -llogpro

clean :
	rm *.o
install :
