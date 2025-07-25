class V{
	void count(){
		String str = "Java Programming";
		int vowels = 0, consonants = 0;
		str = str.toLowerCase();
		for (char ch : str.toCharArray()) {
 			if (Character.isLetter(ch)) {
 				if ("aeiou".contains(String.valueOf(ch))) vowels++;
 				else consonants++;
}
 }
System.out.println("Vowels: " + vowels);
System.out.println("Consonants: " + consonants);
}}
class Vowels{
	public static void main(String args[]){
		V v=new V();
		v.count();
}
}