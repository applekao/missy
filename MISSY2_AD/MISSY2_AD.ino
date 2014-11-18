int button = 7;
int val = -1;
int glass = 13; 
int inByte;
float volt;

void setup() {
  Serial.begin(9600);
  pinMode(button, INPUT);
  pinMode(glass, OUTPUT);
  volt=255;
  analogWrite(glass, volt);

}

void loop() {

  //when press buttom, send hi to serial port
  int value = digitalRead(button);
  if (value == 1) {
    Serial.write("HI");
    delay(5000);
  }

  // receive a numbeer from serial port every 12 hours
  // if receiving a number, reduce the volt of smart film by 1
  // stop reducing when the volt is 0
  if (Serial.available() > 0) {
    inByte = Serial.read();
    volt=volt-20;
    
//when volt is less than 55, stop reducing the volt    
  if (volt<=55){
  volt=55;
  }   
    
  //if receive a number "1" from serial port by calling skype
  // reset the volt of smart film to 12
  if (inByte == 49){ 
    volt=255; 
  }   
  }
  analogWrite(glass, volt);  
}










