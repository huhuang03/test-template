//
// Created by huhua on 2021/2/17.
//

#include "MainWindow.h"
#include <iostream>

using namespace std;

MainWindow::MainWindow(QWidget *parent) : QMainWindow(parent) {
    this->btTest = new QPushButton("Bt1", this);
    connect(this->btTest, SIGNAL(released()), this, SLOT(onBtTestReleased()));
    this->show();
}

void MainWindow::onBtTestReleased() {
    cout << "onBtTestReleased called." << endl;
}
