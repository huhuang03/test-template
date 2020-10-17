cmake_minimum_required(VERSION 3.12)

project($NAME$)

add_executable($NAME$ main.cc)
SET_TARGET_PROPERTIES(t_cmake PROPERTIES LINK_FLAGS  "/MANIFESTUAC:\"uiAccess='false'\" /SUBSYSTEM:WINDOWS")