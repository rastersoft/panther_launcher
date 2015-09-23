### CMakeLists automatically created with AutoVala
### Do not edit

IF(IS_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/LICENSE)
	install(DIRECTORY
		${CMAKE_CURRENT_SOURCE_DIR}/LICENSE
	DESTINATION
		share/gnome-shell/extensions/slingshotgnome@rastersoft.com
	)
ELSE()
	install(FILES
		${CMAKE_CURRENT_SOURCE_DIR}/LICENSE
	DESTINATION
		share/gnome-shell/extensions/slingshotgnome@rastersoft.com
	)
ENDIF()

IF(IS_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/README.md)
	install(DIRECTORY
		${CMAKE_CURRENT_SOURCE_DIR}/README.md
	DESTINATION
		share/gnome-shell/extensions/slingshotgnome@rastersoft.com
	)
ELSE()
	install(FILES
		${CMAKE_CURRENT_SOURCE_DIR}/README.md
	DESTINATION
		share/gnome-shell/extensions/slingshotgnome@rastersoft.com
	)
ENDIF()

IF(IS_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/extension.js)
	install(DIRECTORY
		${CMAKE_CURRENT_SOURCE_DIR}/extension.js
	DESTINATION
		share/gnome-shell/extensions/slingshotgnome@rastersoft.com
	)
ELSE()
	install(FILES
		${CMAKE_CURRENT_SOURCE_DIR}/extension.js
	DESTINATION
		share/gnome-shell/extensions/slingshotgnome@rastersoft.com
	)
ENDIF()

IF(IS_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/metadata.json)
	install(DIRECTORY
		${CMAKE_CURRENT_SOURCE_DIR}/metadata.json
	DESTINATION
		share/gnome-shell/extensions/slingshotgnome@rastersoft.com
	)
ELSE()
	install(FILES
		${CMAKE_CURRENT_SOURCE_DIR}/metadata.json
	DESTINATION
		share/gnome-shell/extensions/slingshotgnome@rastersoft.com
	)
ENDIF()

