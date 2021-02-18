//
// Created by huhua on 2021/2/17.
//

#ifndef GT_MAINWINDOW_H
#define GT_MAINWINDOW_H

#include <QMainWindow>
#include <QPushButton>

class MainWindow: public QMainWindow {
    Q_OBJECT

private:
    QPushButton *btTest;

public:
    explicit MainWindow(QWidget *parent = nullptr);

public slots:
    void onBtTestReleased();

};


#endif //GT_MAINWINDOW_H
