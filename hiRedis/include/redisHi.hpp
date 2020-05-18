#include "hiRedisOption.hpp"
#include <mysql/mysql.h>
#include "libconfig.h++"
#include "../lib/include/logpro.hpp"
#define COMMONDCOUNT 15 
const string list[COMMONDCOUNT]={
    "SET", "GET", "INCR", "LPUSH", "RPUSH", "LPOP", 
    "RPOP", "SADD", "HSET", "SPOP","LRANGE_100", "LRANGE_300",
    "LRANGE_500", "LRANGE_600", "MSET"};
//SET GET INCR LPUSH RPUSH LPOP RPOP SADD HSET SPOP LRANGE_100 LRANGE_300 LRANGE_500 LRANGE_600 MSET
long getTimeUsec();
pthread_t threadMake(int i);
void* thread_main(void* arg);
HiRedisOption hrp;
long    startT;
long    stopT;
//long    usedT;
//string dataPath = "/opt/midware/github/redisTest/data/hiredisData/";
string stmp;
string VALUE="";
Logpro log;
MYSQL *mysql;
bool mysqlInit(const char*);
bool exeSql(string sql); 
string sql;
