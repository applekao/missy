#include <SimpleTimer.h>

int led = 7;
int val = -1;
Timer tcb;
int counting;


void setup() {
  Serial.begin(9600);
  pinMode(led, INPUT);
  counting=tcb.every(1000, writeToSerial);
}

void loop() {
  int value = digitalRead(led);
  tcb.update();
  if (value == 1) {
      tcb.stop(counting);
      Serial.write("HI");
      delay(5000);
      tcb.stop(counting);
      tcb.every(1000, writeToSerial); 
      tcb.update();
  }
}

void writeToSerial(){
  static  unsigned long count = 0;
  Serial.println(count); // 從0開始輸出，每次加1
  count++;
}




