### CMakeLists automatically created with AutoVala
### Do not edit

project (panther_launcher)
cmake_minimum_required (VERSION 2.6)
cmake_policy (VERSION 2.8)
list (APPEND CMAKE_MODULE_PATH ${CMAKE_SOURCE_DIR}/cmake)
enable_testing ()
option(ICON_UPDATE "Update the icon cache after installing" ON)
option(BUILD_VALADOC "Build API documentation if Valadoc is available" OFF)
option(HAVE_ZEITGEIST "HAVE_ZEITGEIST" OFF)
option(HAS_PLANK "HAS_PLANK" OFF)

include(GNUInstallDirs)
if( ( ${CMAKE_INSTALL_PREFIX} MATCHES "^/usr/local" ) )
	# A workaround to ensure that works 'out of the box' in Debian-based systems
	set(CMAKE_INSTALL_LIBDIR lib)
endif()

set(HAVE_VALADOC OFF)
if(BUILD_VALADOC)
	find_package(Valadoc)
	if(VALADOC_FOUND)
		set(HAVE_VALADOC ON)
		include(Valadoc)
	else()
		message("Valadoc not found, will not build documentation")
	endif()
endif()

find_package(PkgConfig)

set(MODULES_TO_CHECK ${MODULES_TO_CHECK} atk)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} cairo)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} gdk-3.0)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} gdk-pixbuf-2.0)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} gee-0.8)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} gio-2.0)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} gio-unix-2.0)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} glib-2.0)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} gobject-2.0)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} gtk+-3.0)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} json-glib-1.0)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} libgnome-menu-3.0)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} libsoup-2.4)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} pango)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} pangocairo)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} x11)
set(MODULES_TO_CHECK ${MODULES_TO_CHECK} zeitgeist-2.0)

pkg_check_modules(DEPS REQUIRED ${MODULES_TO_CHECK})

add_subdirectory(src)
add_subdirectory(po)
add_subdirectory(data)
add_subdirectory(data/icons)
add_subdirectory(panther_gnome_shell)

