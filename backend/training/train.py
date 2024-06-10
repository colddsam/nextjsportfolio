import csv

# Save to CSV
output_file = 'portfolio.csv'
with open(output_file, mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["Question", "Answer"])
    writer.writerows(qa_data)

# output_file
