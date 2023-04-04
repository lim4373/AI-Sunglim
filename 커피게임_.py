print("1:아이스 아메리카노  1,500\n" "2:허니자몽블랙티  3,500\n" "3.얼그레이 3,000")
coffee_price = 0
order = int(input("음료 주문을 선택해주세요! 번호 입력>>>"))
if order == 1:
    coffee_price = 1800
elif order == 2:
    coffee_price = 3500
elif order == 3:
    coffee_price = 3000
cups = int(input("몇잔을 주문하시겠어요? >>>"))
total_price = coffee_price*cups
a = "카드"

received = int(input(f"총 금액은 {total_price} 입니다.현금을 투입해주세요{a}는 안됩니다 ㅎㅎ>>> "))
if received >= total_price:
    change = received - total_price
    come = "또 방문해주세요"
    print(f"{received}원을 받았습니다. 거스름돈은 {change} 입니다.{come}")
else:
    print("나가주세요")
2