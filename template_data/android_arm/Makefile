helloworld.out: helloworld.s
	aas -g -o helloworld.o helloworld.s
	ald -o helloworld.out helloworld.o
	rm helloworld.o

install: helloworld.out
	adb push helloworld.out /data/local/tmp
	adb shell "chmod +x /data/local/tmp"

run: install
	adb shell '/data/local/tmp/helloworld.out; echo $$?'

gdb: install
	adb forward tcp:1337 tcp:1337
	adb shell -c '/data/local/tmp/gdbserver :1377 /data/local/tmp/helloworld.out'

gdb_client:
	/Users/th/Library/Android/sdk/ndk/21.1.6352462/prebuilt/darwin-x86_64/bin/gdb -ex 'target remote localhost:1337' -ex 'layout asm' --ex 'layout r'

clean:
	rm -rf *.out