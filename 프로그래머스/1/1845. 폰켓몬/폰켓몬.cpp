#include <vector>
#include <array>
#include <set>
using namespace std;

int solution(vector<int> nums)
{
    int max = nums.size() / 2;
    set<int> s;
    
    for (int i = 0; i < nums.size(); i++) {
        s.insert(nums[i]);
    }
    
    return s.size() > max ? max : s.size();

}