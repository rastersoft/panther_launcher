project('panther_launcher',['c','vala'])

HAVE_ZEITGEIST = (get_option('HAVE_ZEITGEIST') != '')
HAS_PLANK = (get_option('HAS_PLANK') != '')
DISABLE_FLASHBACK = (get_option('DISABLE_FLASHBACK') != '')
DISABLE_MATE = (get_option('DISABLE_MATE') != '')

add_global_arguments('-DGETTEXT_PACKAGE="panther_launcher"',language: 'c')

gtk_3_0_dep = dependency('gtk+-3.0')
if ( HAVE_ZEITGEIST )
zeitgeist_1_0_dep = dependency('zeitgeist-1.0')
endif
cairo_dep = dependency('cairo')
gdk_3_0_dep = dependency('gdk-3.0')
gdk_pixbuf_2_0_dep = dependency('gdk-pixbuf-2.0')
gee_0_8_dep = dependency('gee-0.8')
gio_2_0_dep = dependency('gio-2.0')
gio_unix_2_0_dep = dependency('gio-unix-2.0')
glib_2_0_dep = dependency('glib-2.0')
gobject_2_0_dep = dependency('gobject-2.0')
json_glib_1_0_dep = dependency('json-glib-1.0')
libgnome_menu_3_0_dep = dependency('libgnome-menu-3.0')
libsoup_2_4_dep = dependency('libsoup-2.4')
pango_dep = dependency('pango')
pangocairo_dep = dependency('pangocairo')
zeitgeist_2_0_dep = dependency('zeitgeist-2.0')

subdir('po')
cfg_dbus_data = configuration_data()
cfg_dbus_data.set ('DBUS_PREFIX',get_option('prefix'))
meson.add_install_script(join_paths(meson.current_source_dir(),'meson_scripts','install_data.sh'),'/etc/xdg/menus',join_paths(meson.current_source_dir(),'data','panther-applications.menu'))

meson.add_install_script(join_paths(meson.current_source_dir(),'meson_scripts','install_data.sh'),join_paths(get_option('prefix'),'share/gnome-shell/extensions/slingshotgnome@rastersoft.com'),join_paths(meson.current_source_dir(),'panther_gnome_shell','LICENSE'))

meson.add_install_script(join_paths(meson.current_source_dir(),'meson_scripts','install_data.sh'),join_paths(get_option('prefix'),'share/gnome-shell/extensions/slingshotgnome@rastersoft.com'),join_paths(meson.current_source_dir(),'panther_gnome_shell','README.md'))

meson.add_install_script(join_paths(meson.current_source_dir(),'meson_scripts','install_data.sh'),join_paths(get_option('prefix'),'share/gnome-shell/extensions/slingshotgnome@rastersoft.com'),join_paths(meson.current_source_dir(),'panther_gnome_shell','extension.js'))

meson.add_install_script(join_paths(meson.current_source_dir(),'meson_scripts','install_data.sh'),join_paths(get_option('prefix'),'share/gnome-shell/extensions/slingshotgnome@rastersoft.com'),join_paths(meson.current_source_dir(),'panther_gnome_shell','metadata.json'))

meson.add_install_script(join_paths(meson.current_source_dir(),'meson_scripts','install_data.sh'),join_paths(get_option('prefix'),get_option('datadir'),'panther_launcher'),join_paths(meson.current_source_dir(),'data/local','','*'))

meson.add_install_script(join_paths(meson.current_source_dir(),'meson_scripts','install_data.sh'),join_paths(get_option('prefix'),get_option('datadir'),'doc','panther_launcher'),join_paths(meson.current_source_dir(),'doc','','*'))

dbus_cfg_com_rastersoft_panther_remotecontrol_service_base = configure_file(input: 'data/dbus/com.rastersoft.panther.remotecontrol.service.base',output: 'com.rastersoft.panther.remotecontrol.service', configuration: cfg_dbus_data)
install_data(dbus_cfg_com_rastersoft_panther_remotecontrol_service_base,install_dir: join_paths(get_option('prefix'),get_option('datadir'),'dbus-1','services'))
install_data( 'data/dbus/com.rastersoft.panther.remotecontrol.conf',install_dir: join_paths(get_option('prefix'),get_option('datadir'),'dbus-1','system.d'))
install_data('data/org.rastersoft.panther.gschema.xml', install_dir: join_paths(get_option('prefix'),get_option('datadir'), 'glib-2.0', 'schemas'))
meson.add_install_script('meson_scripts/install_schemas.py')
install_data('data/icons/panther-categories-symbolic.svg',install_dir: join_paths(get_option('prefix'),get_option('datadir'),'icons','hicolor/scalable/status'))
install_data('data/icons/panther-icons-symbolic.svg',install_dir: join_paths(get_option('prefix'),get_option('datadir'),'icons','hicolor/scalable/status'))
if not DISABLE_FLASHBACK
	check_files_retval = run_command(join_paths(meson.current_source_dir(),'meson_scripts','check_path.sh'),'/usr/lib/pkgconfig/libpanel-applet.pc')
	check_files_var = check_files_retval.returncode()
	if (check_files_var != 0)
		check_files_retval = run_command(join_paths(meson.current_source_dir(),'meson_scripts','check_path.sh'),'/usr/lib64/pkgconfig/libpanel-applet.pc')
		check_files_var = check_files_retval.returncode()
	endif
	if (check_files_var != 0)
		check_files_retval = run_command(join_paths(meson.current_source_dir(),'meson_scripts','check_path.sh'),'/usr/lib/x86_64-linux-gnu/pkgconfig/libpanel-applet.pc')
		check_files_var = check_files_retval.returncode()
	endif
	if (check_files_var != 0)
		error('At least one of these files must exist to compile this project:\n	/usr/lib/pkgconfig/libpanel-applet.pc\n	/usr/lib64/pkgconfig/libpanel-applet.pc\n	/usr/lib/x86_64-linux-gnu/pkgconfig/libpanel-applet.pc\n')
	endif
endif
if not DISABLE_MATE
	check_files_retval = run_command(join_paths(meson.current_source_dir(),'meson_scripts','check_path.sh'),'/usr/lib/pkgconfig/libmatepanelapplet-4.0.pc')
	check_files_var = check_files_retval.returncode()
	if (check_files_var != 0)
		check_files_retval = run_command(join_paths(meson.current_source_dir(),'meson_scripts','check_path.sh'),'/usr/lib64/pkgconfig/libmatepanelapplet-4.0.pc')
		check_files_var = check_files_retval.returncode()
	endif
	if (check_files_var != 0)
		check_files_retval = run_command(join_paths(meson.current_source_dir(),'meson_scripts','check_path.sh'),'/usr/lib/x86_64-linux-gnu/pkgconfig/libmatepanelapplet-4.0.pc')
		check_files_var = check_files_retval.returncode()
	endif
	if (check_files_var != 0)
		check_files_retval = run_command(join_paths(meson.current_source_dir(),'meson_scripts','check_path.sh'),'/usr/lib/i386-linux-gnu/pkgconfig/libmatepanelapplet-4.0.pc')
		check_files_var = check_files_retval.returncode()
	endif
	if (check_files_var != 0)
		error('At least one of these files must exist to compile this project:\n	/usr/lib/pkgconfig/libmatepanelapplet-4.0.pc\n	/usr/lib64/pkgconfig/libmatepanelapplet-4.0.pc\n	/usr/lib/x86_64-linux-gnu/pkgconfig/libmatepanelapplet-4.0.pc\n	/usr/lib/i386-linux-gnu/pkgconfig/libmatepanelapplet-4.0.pc\n')
	endif
endif
subdir('src')
