cfg_panther_launcher = configuration_data()
cfg_panther_launcher.set('DATADIR', join_paths(get_option('prefix'),get_option('datadir')))
cfg_panther_launcher.set('PKGDATADIR', join_paths(get_option('prefix'),get_option('datadir'),'panther_launcher'))
cfg_panther_launcher.set('GETTEXT_PACKAGE', 'panther_launcher')
cfg_panther_launcher.set('RELEASE_NAME', 'panther_launcher')
cfg_panther_launcher.set('PREFIX', get_option('prefix'))
cfg_panther_launcher.set('VERSION', '1.13.0')
cfg_panther_launcher.set('TESTSRCDIR', meson.source_root())

cfgfile_1 = configure_file(input: 'Config.vala.base',output: 'Config.vala',configuration: cfg_panther_launcher)

panther_launcher_deps = [gtk_3_0_dep]
if ( HAVE_ZEITGEIST )
panther_launcher_deps += [zeitgeist_1_0_dep]
endif
panther_launcher_deps += [cairo_dep]
panther_launcher_deps += [gdk_3_0_dep]
panther_launcher_deps += [gdk_pixbuf_2_0_dep]
panther_launcher_deps += [gee_0_8_dep]
panther_launcher_deps += [gio_2_0_dep]
panther_launcher_deps += [gio_unix_2_0_dep]
panther_launcher_deps += [glib_2_0_dep]
panther_launcher_deps += [gobject_2_0_dep]
panther_launcher_deps += [json_glib_1_0_dep]
panther_launcher_deps += [libgnome_menu_3_0_dep]
panther_launcher_deps += [libsoup_2_4_dep]
panther_launcher_deps += [pango_dep]
panther_launcher_deps += [pangocairo_dep]
panther_launcher_deps += [zeitgeist_2_0_dep]
panther_launcher_sources = [cfgfile_1]
panther_launcher_sources += ['Backend/App.vala']
panther_launcher_sources += ['Backend/AppSystem.vala']
panther_launcher_sources += ['Backend/DBusService.vala']
panther_launcher_sources += ['Backend/RelevancyService.vala']
panther_launcher_sources += ['Backend/SynapseSearch.vala']
panther_launcher_sources += ['Panther.vala']
panther_launcher_sources += ['PantherView.vala']
panther_launcher_sources += ['Pixels.vala']
panther_launcher_sources += ['Settings.vala']
panther_launcher_sources += ['Utils.vala']
panther_launcher_sources += ['Widgets/AppEntry.vala']
panther_launcher_sources += ['Widgets/CategoryView.vala']
panther_launcher_sources += ['Widgets/Grid.vala']
panther_launcher_sources += ['Widgets/SearchItem.vala']
panther_launcher_sources += ['Widgets/SearchView.vala']
panther_launcher_sources += ['Widgets/Sidebar.vala']
panther_launcher_sources += ['Widgets/Switcher.vala']
panther_launcher_sources += ['synapse-core/common-actions.vala']
panther_launcher_sources += ['synapse-core/config-service.vala']
panther_launcher_sources += ['synapse-core/data-sink.vala']
panther_launcher_sources += ['synapse-core/dbus-service.vala']
panther_launcher_sources += ['synapse-core/desktop-file-service.vala']
panther_launcher_sources += ['synapse-core/match.vala']
panther_launcher_sources += ['synapse-core/plugin.vala']
panther_launcher_sources += ['synapse-core/query.vala']
panther_launcher_sources += ['synapse-core/relevancy-backend-zg.vala']
panther_launcher_sources += ['synapse-core/relevancy-service.vala']
panther_launcher_sources += ['synapse-core/result-set.vala']
panther_launcher_sources += ['synapse-core/utils.vala']
panther_launcher_sources += ['synapse-core/volume-service.vala']
panther_launcher_sources += ['synapse-plugins/calculator-plugin.vala']
panther_launcher_sources += ['synapse-plugins/command-plugin.vala']
panther_launcher_sources += ['synapse-plugins/desktop-file-plugin.vala']
panther_launcher_sources += ['synapse-plugins/system-managment.vala']
panther_launcher_vala_args = ['--pkg','posix']
panther_launcher_c_args = ['-DGMENU_I_KNOW_THIS_IS_UNSTABLE']
if HAVE_ZEITGEIST
  panther_launcher_vala_args += ['-D', 'HAVE_ZEITGEIST']
  panther_launcher_c_args += ['-DHAVE_ZEITGEIST']
endif
if HAS_PLANK
  panther_launcher_vala_args += ['-D', 'HAS_PLANK']
  panther_launcher_c_args += ['-DHAS_PLANK']
endif
if DISABLE_FLASHBACK
  panther_launcher_vala_args += ['-D', 'DISABLE_FLASHBACK']
  panther_launcher_c_args += ['-DDISABLE_FLASHBACK']
endif
if DISABLE_MATE
  panther_launcher_vala_args += ['-D', 'DISABLE_MATE']
  panther_launcher_c_args += ['-DDISABLE_MATE']
endif
panther_launcher_deps += [meson.get_compiler('c').find_library('m', required : false)]
panther_launcher_link_args = ['-rdynamic']

executable('panther_launcher',panther_launcher_sources,dependencies: panther_launcher_deps,vala_args: panther_launcher_vala_args,c_args: panther_launcher_c_args,link_args: panther_launcher_link_args,install: true)

