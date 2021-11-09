#include <iostream>
#include <QApplication>
#include <QMainWindow>
#include <QPushButton>
#include "./MainWindow.h"

using namespace std;

int main (int argv, char **argc) {
    QApplication app(argv, argc);
    MainWindow mainWindow;

    mainWindow.show();
    return QApplication::exec();
}