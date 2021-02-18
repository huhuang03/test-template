cmake_minimum_required(VERSION 3.12)

set(CMAKE_AUTOMOC ON)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(Qt5_USE_STATIC_LIBS ON)
set(Qt5_USE_STATIC_RUNTIME ON)

project(gt)

find_package(Qt5 REQUIRED COMPONENTS Core Widgets)
include_directories(${Qt5_INCLUDE_DIRS})

file(GLOB_RECURSE gt_SRC *.h *.cpp)
add_executable(gt ${gt_SRC})

target_link_libraries(gt Qt5::Widgets)