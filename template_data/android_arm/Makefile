helloworld.out: helloworld.s
	aas -g -o helloworld.o helloworld.s
	ald -o helloworld.out helloworld.o
	rm helloworld.o

install: helloworld.out
	adb push helloworld.out /data/local/tmp
	adb shell "chmod +x /data/local/tmp"

run: install
	adb shell "/data/local/tmp/helloworld.out"

gdb: install
	adb forward tcp:1337 tcp:1337
	adb shell "/data/local/tmp/gdbserver :1377 /data/local/tmp/helloworld.out"

clean:
	rm -rf *.out