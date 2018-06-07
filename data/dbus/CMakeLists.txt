### CMakeLists automatically created with AutoVala
### Do not edit

SET(DBUS_PREFIX ${CMAKE_INSTALL_PREFIX})
configure_file(${CMAKE_CURRENT_SOURCE_DIR}/com.rastersoft.panther.remotecontrol.service.base ${CMAKE_CURRENT_BINARY_DIR}/com.rastersoft.panther.remotecontrol.service)
install(FILES ${CMAKE_CURRENT_BINARY_DIR}/com.rastersoft.panther.remotecontrol.service DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/dbus-1/services/)
install(FILES ${CMAKE_CURRENT_SOURCE_DIR}/com.rastersoft.panther.remotecontrol.conf DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/dbus-1/system.d/)
