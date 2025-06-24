import java.util.*;

class Solution {
    Map<String, Integer> map;
    int max;

    public String[] solution(String[] orders, int[] course) {
        List<String> result = new ArrayList<>();

        for (int len : course) {
            map = new HashMap<>();
            max = 0;

            for (String order : orders) {
                char[] chars = order.toCharArray();
                Arrays.sort(chars);
                combine(chars, new StringBuilder(), 0, len);
            }

            for (String key : map.keySet()) {
                if (map.get(key) == max && max >= 2) {
                    result.add(key);
                }
            }
        }

        Collections.sort(result);
        return result.toArray(new String[0]);
    }

    private void combine(char[] arr, StringBuilder sb, int idx, int targetLen) {
        if (sb.length() == targetLen) {
            String comb = sb.toString();
            map.put(comb, map.getOrDefault(comb, 0) + 1);
            max = Math.max(max, map.get(comb));
            return;
        }

        for (int i = idx; i < arr.length; i++) {
            sb.append(arr[i]);
            combine(arr, sb, i + 1, targetLen);
            sb.deleteCharAt(sb.length() - 1);
        }
    }
}