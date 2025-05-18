// Title: Search Insert Position
            // Difficulty: Easy
            // Language: TypeScript
            // Link: https://leetcode.com/problems/search-insert-position/

        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) {
        let mid = Math.floor((low + high) / 2);
            low = mid + 1;
        }
        else {
            high = mid - 1;
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
function searchInsert(nums: number[], target: number): number {