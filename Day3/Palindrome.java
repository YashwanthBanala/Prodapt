class P{
	void checks(String str){
		String rev=new StringBuilder(str).reverse().toString();
		if(str.equalsIgnoreCase(rev)){
			System.out.println("is a Palindrome");}
		else{
			System.out.println(" is not a Palindrome");}
		}
}
class Palindrome{
	public static void main(String args[]){
		String str="Malayalam";
		P p=new P();
		p.checks(str);
}
}