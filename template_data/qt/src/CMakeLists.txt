set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

find_package(Qt5 REQUIRED COMPONENTS Core Widgets)

file(GLOB_RECURSE gt_SRC *.h *.cpp)
add_executable(t_qt ${gt_SRC})

target_link_libraries(t_qt Qt5::Widgets)
target_include_directories(t_qt PRIVATE ${Qt5_INCLUDE_DIRS})
