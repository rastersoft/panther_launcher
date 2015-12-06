SONAME = libpantherapplet

CC = gcc -c -fPIC
LN = gcc -shared -Wl,-soname,$SONAME

libpantherapplet.so: panther_applet.o dbus.o
	$(LN) -o libpantherapplet.so panther_applet.o dbus.o `pkg-config --libs gtk+-3.0 libpanel-applet gio-2.0 gio-unix-2.0`

panther_applet.o: panther_applet.c dbus.h
	$(CC) -o panther_applet.o panther_applet.c `pkg-config --cflags gtk+-3.0 libpanel-applet`

dbus.c dbus.h: gdbus.xml
	gdbus-codegen --c-generate-object-manager --generate-c-code dbus gdbus.xml

dbus.o: dbus.c dbus.h
	$(CC) -o dbus.o dbus.c `pkg-config --cflags gio-2.0 gio-unix-2.0`

install: libpantherapplet.so
	mkdir -p /usr/lib/gnome-panel/5.0/
	cp libpantherapplet.so /usr/lib/gnome-panel/5.0/
	cp panther_launcher.panel-applet /usr/share/gnome-panel/5.0/applets/

clean:
	rm -f *.o dbus.c dbus.h libpantherapplet.so
