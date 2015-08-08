### CMakeLists automatically created with AutoVala
### Do not edit

IF(IS_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/panther-applications.menu)
	install(DIRECTORY
		${CMAKE_CURRENT_SOURCE_DIR}/panther-applications.menu
	DESTINATION
		/etc/xdg/menus
	)
ELSE()
	install(FILES
		${CMAKE_CURRENT_SOURCE_DIR}/panther-applications.menu
	DESTINATION
		/etc/xdg/menus
	)
ENDIF()

include(GSettings)
add_schema(org.rastersoft.panther.gschema.xml)
