./stop.sh

rm -rf log.txt

nohup yarn prod &> log.txt & echo $! > last.pid
