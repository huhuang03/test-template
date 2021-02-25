.text
.global _start

_start:
    mov     %r0, $1				// file descriptor number 1 (stdout)
    ldr     %r1, =message
    mov     %r2, $message_len
    mov     %r7, $4				// syscall 4 (write)
    swi     $0

    mov     %r0, $0				// exit status 0 (ok)
    mov     %r7, $1				// syscall 1 (exit)
    swi     $0

.thumb
_thumb_func:
    b lr
	
.data
message:
    .ascii      "Hello, World\n"
message_len = . - message