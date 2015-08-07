SONAME = libpantherapplet

CC = gcc -c -fPIC
LN = gcc -shared -Wl,-soname,$SONAME

libpantherapplet.so: panther_applet.o
	$(LN) -o libpantherapplet.so panther_applet.o  `pkg-config --libs gtk+-3.0 libpanel-applet`

panther_applet.o: panther_applet.c
	$(CC) -o panther_applet.o panther_applet.c `pkg-config --cflags gtk+-3.0 libpanel-applet`

install: libpantherapplet.so
	cp libpantherapplet.so /usr/lib/gnome-panel/5.0/
	cp panther_launcher.panel-applet /usr/share/gnome-panel/5.0/applets/

clean:
	rm -f *.o libpantherapplet.so
