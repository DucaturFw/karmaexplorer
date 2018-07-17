./stop.sh

rm -rf log.txt

nohup yarn serve -s build &> log.txt & echo $! > last.pid
