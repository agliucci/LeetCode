// Title: Sqrt(x)
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/sqrt(x)/

        else if (mid**2 < x) {
            left = mid + 1;
            result = mid;
        }
        else {
            return mid;
        }
    }

    return result;
};